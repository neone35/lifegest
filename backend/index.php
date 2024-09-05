<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from POST request as json
    $data = json_decode(file_get_contents("php://input"), true);

    // Extract the data sent from the React frontend
    $grandparentsAvgAge = $data['grandparentsAvgAge'];
    $sleepHours = $data['sleepHours'];
    $commuteHours = $data['commuteHours'];
    $workHours = $data['workHours'];

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

    // Return the response in JSON format
    echo json_encode($response);
}
