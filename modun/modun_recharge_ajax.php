<?php
include_once "../_config.php";
if ($_REQUEST) {
    $return = array(
        'error' => 0
    );
    $type   = $_REQUEST['type'];
    if ($type === 'recharge_card') {
        $card_type   = htmlspecialchars(addslashes($_POST['card_type']));
        $card_amount = htmlspecialchars(addslashes($_POST['card_amount']));
        $card_serial = htmlspecialchars(addslashes($_POST['card_serial']));
        $card_pin    = htmlspecialchars(addslashes($_POST['card_pin']));
        $card_code   = random('qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM', 12);
        $card_origin = $card_amount - $card_amount * $settings_discount / 100;
        $card_time   = time();
        $check_card  = json_decode(curl_get('https://card24h.com/api/card-auto.php?auto=true&type=' . $card_type . '&menhgia=' . $card_amount . '&seri=' . $card_serial . '&pin=' . $card_pin . '&APIKey=' . $settings_card24h . '&callback=' . $settings_callback . '&content=' . $card_code), true);
        if ($check_card['data']['status'] == 'error') {
            $return['error'] = 1;
            $return['msg']   = '' . $check_card['data']['msg'] . '';
            die(json_encode($return));
        } else {
            if ($check_card['data']['status'] == 'success') {
                mysqli_query($conn, "INSERT INTO table_card(card_username, card_code, card_type, card_amount, card_serial, card_pin, card_origin, card_content, card_status, card_time) 
                VALUES ('$user_username', '$card_code', '$card_type', '$card_amount', '$card_serial', '$card_pin', '$card_origin', '" . $check_card['data']['msg'] . "', 'progress', '$card_time')");
                $return['msg'] = 'Thẻ đang được xử lí vui lòng đợi.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
}
?>