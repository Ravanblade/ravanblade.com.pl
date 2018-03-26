<?php

require_once __DIR__ . '/db_connect.php';
//error_reporting(E_ERROR | E_PARSE);

$selectedType = null;
$conn = null;

if(checkType())
{
	parseType();
}

function checkType()
{
	global $conn;
	for ($i = 0; $i < 3; $i++)
	{
		if($_GET['type'] == $i)
		{
			global $selectedType;
			$selectedType = $i;

			try
			{
				$db = new DB_CONNECT();
				$conn = $db->connect();
			}
			catch(PDOException $e)
			{
				jsonResponse(0, 'Connection failed'.$e->getMessage());
				return false;
			}

			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return true;
		}
	}
	jsonResponse(0, "Cannot recognize request type.");
	return false;
}

function parseType()
{
	global $selectedType;

	switch ($selectedType)
	{
		case 0:
      getProjects($_GET['projectsPerPage'], $_GET['page'], $_GET['categoryId']);
			break;
		case 1:
			getProjectsCount($_GET['categoryId']);
			break;
		case 2:

			break;
		case 3:

			break;
		default:
			break;

	}
}

function jsonResponse($success, $message)
{
 $response = array();
 $response["success"] = $success;
 $response["message"] = $message;
 echo json_encode($response);
}


function getProjectsCount($categoryId) {
	global $conn;
	$query = $conn->prepare("SELECT COUNT(*) FROM Projects");

	$query->execute();
	$response['Count'] = $query->fetchColumn();
	echo json_encode($response);
}

function getProjects($projectsPerPage, $page, $categoryId = -1)
{
		global $conn;
    $query = $conn->prepare("SELECT COUNT(*) FROM Projects ");
    $query->execute();
    $num_rows = $query->fetchColumn();
		$sql = "SELECT * FROM Projects ";
		if($categoryId != -1)
			$sql .= "WHERE CategoryId = :cat ";

		$sql .= "LIMIT :projectsPerPage OFFSET :page";
	//	$query = $conn->prepare("SELECT * FROM Projects LIMIT :projectsPerPage OFFSET :page");
		//echo $sql;
		$query = $conn->prepare($sql);
    $query->bindValue(':page', intval($page) * intval($projectsPerPage), PDO::PARAM_INT);
    $query->bindValue(':projectsPerPage', intval($projectsPerPage), PDO::PARAM_INT);
		if($categoryId != -1)
			$query->bindValue(':cat', intval($categoryId), PDO::PARAM_INT);
		$query->execute();

    $response = array();
		$response['projects'] = array();

    while($fetch = $query->fetch(PDO::FETCH_ASSOC))
		{
  		$project = array();
  		$project['Title'] = $fetch['Title'];
  		$project['Technologies'] = $fetch['Technologies'];
  		$project['Text'] = $fetch['Text'];
  		$project['Url'] = $fetch['Url'];
  		$project['UrlText'] = $fetch['UrlText'];
  		$project['CodeUrl'] = $fetch['CodeUrl'];
  		$project['CodeText'] = $fetch['CodeText'];
  		$project['ImgUrl'] = $fetch['ImgUrl'];
			$project['CategoryId'] = $fetch['CategoryId'];
      array_push($response['projects'], $project);
    }

		echo json_encode($response);

}
