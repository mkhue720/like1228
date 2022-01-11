<?php
require_once '_config.php';
$result = mysqli_query($conn, "SELECT * FROM table_buff_like WHERE buff_like_service = 'buff-like-facebook' AND buff_like_status = 'running'  ORDER BY RAND() LIMIT 10"); // chạy 3 uid mỗi lần cron
while ($row = mysqli_fetch_assoc($result)) {
    $buff_like_username  = $row['buff_like_username'];
    $buff_like_facebook  = $row['buff_like_facebook'];
    $buff_like_origin  = $row['buff_like_origin'];
    $check_info_facebook = json_decode(file_get_contents('https://graph.facebook.com/' . $buff_like_facebook . '/?access_token=' . $settings_token), true);
    if (!$check_info_facebook['id']) {
        echo 'token hệ thống đã die hoặc, id không đúng.';
    }else {
        $check_like_facebook = json_decode(file_get_contents('https://graph.facebook.com/' . $buff_like_facebook . '/likes?summary=true&access_token=' . $settings_token), true);
        $buff_like_increased = $check_like_facebook['summary']['total_count'];
        $buff_like_increased = $buff_like_increased - $buff_like_origin;
        mysqli_query($conn, "UPDATE table_buff_like SET buff_like_increased = '$buff_like_increased' WHERE buff_like_facebook = '$buff_like_facebook'");
        echo 'thành công';
    }
}
?>