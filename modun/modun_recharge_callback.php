<?php
include_once "../_config.php";
error_reporting(0);
if (isset($_GET['content']) && isset($_GET['status'])) {
    $card_code  = check_string($_GET['content']);
    $check_card = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_card WHERE card_code = '$card_code'"));
    $card_origin = $check_card['card_origin'];
    $card_username = $check_card['card_username'];
    if ($_GET['status'] == 'thatbai') {
        mysqli_query($conn, "UPDATE table_card SET card_status = 'fail' WHERE card_code = '$card_code' AND card_status = 'progress'");
    } else {
        if ($_GET['status'] == 'hoantat') {
            mysqli_query($conn, "UPDATE table_card SET card_status = 'success' WHERE card_code = '$card_code' AND card_status = 'progress'");
            mysqli_query($conn, "UPDATE table_user SET user_point = user_point + '$card_origin' WHERE user_username = '$card_username'");
        } else {
            
        }
    }
    
}

?>