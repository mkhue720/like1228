<?php
require_once '../../_config.php';
$result = mysqli_query($conn, "SELECT * FROM table_buff_like WHERE buff_like_service = 'buff-share-facebook' AND buff_like_status = 'running'  ORDER BY RAND() LIMIT 10");
while ($row = mysqli_fetch_assoc($result)) {
    $buff_like_username  = $row['buff_like_username'];
    $buff_like_facebook  = $row['buff_like_facebook'];
    $buff_like_origin  = $row['buff_like_origin'];
    $buff_like_check_like = $row['buff_like_origin'] + $row['buff_like_amount'];
    $check_info_facebook = json_decode(file_get_contents('https://graph.facebook.com/' . $buff_like_facebook . '/?access_token=' . $settings_token), true);
    $check_share_facebook = json_decode(file_get_contents('https://graph.facebook.com/v1.0/' . $check_info_facebook['from']['id'] . '_' . $buff_like_facebook . '?fields=shares.summary(true)&access_token=' . $settings_token), true);
    $buff_like_increased = $check_share_facebook['shares']['count'];
    $buff_like_increased = $buff_like_increased - $buff_like_origin;
    $buff_like_present   = $check_share_facebook['shares']['count'];
    if (!$check_info_facebook['id']) {
        $return['error'] = 1;
        $return['msg'] = 'Token die hoặc bài viết đã bị xóa.';
        die(json_encode($return));
    } else if ($buff_like_check_like < $buff_like_present) {
        mysqli_query($conn, "UPDATE table_buff_like SET buff_like_increased = '$buff_like_increased', buff_like_present = '$buff_like_present', buff_like_status = 'complete' WHERE buff_like_facebook = '$buff_like_facebook'");
        $return['error'] = 1;
        $return['msg'] = 'Id này đã chạy đủ like.';
        die(json_encode($return));
    } else {
        if (mysqli_query($conn, "UPDATE table_buff_like SET buff_like_increased = '$buff_like_increased', buff_like_present = '$buff_like_present' WHERE buff_like_facebook = '$buff_like_facebook'")) {
            $return['msg'] = 'Chạy api check buff like thành công.';
            die(json_encode($return));
        } else {
            $return['error'] = 1;
            $return['msg'] = 'Có gì đó không ổn.';
            die(json_encode($return));
        }
    }
}
?>