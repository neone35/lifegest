<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from POST request as json
    $data = json_decode(file_get_contents("php://input"), true);
    // error_log(print_r( $data));

    if ($data === null) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }

    // Extract the data sent from the React frontend
    $grandparentsAvgAge = $data['grandparentsAvgAge'];
    $sleepHours = $data['sleepHours'];
    $commuteHours = $data['commuteHours'];
    $workHours = $data['workHours'];

    // Validate that the data is not empty
    if (empty($grandparentsAvgAge) || empty($sleepHours) || empty($commuteHours) || empty($workHours)) {
        echo json_encode(['error' => 'Missing required data']);
        exit;
    }

    // Results calculation
    $averageLifeExpectancy = $grandparentsAvgAge;
    $weeksInYear = 52;
    $totalWeeks = $averageLifeExpectancy * $weeksInYear;

    $hoursInWeek = 168;
    $sleepWeeks = $sleepHours / $hoursInWeek;
    $commuteWeeks = $commuteHours / $hoursInWeek;
    $workWeeks = $workHours / $hoursInWeek;

    $freeTimeWeeks = $totalWeeks - ($sleepWeeks + $commuteHours + $workHours);

    // Create the response
    $response = [
        'totalWeeks' => $totalWeeks,
        'sleepWeeks' => $sleepWeeks,
        'commuteWeeks' => $commuteWeeks,
        'workWeeks' => $workWeeks,
        'freeTimeWeeks' => $freeTimeWeeks
    ];

    header('Content-Type: application/json');

    // Return the response in JSON format
    echo json_encode($response);
}
