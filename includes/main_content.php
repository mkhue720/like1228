<?php
if (isset($_REQUEST['Lady'])) {
    $DuySexy = $_REQUEST['Lady'];
    if ($duysexy == false) {
        switch ($DuySexy) {
            // Account Handle
            case 'dang-nhap':
                include 'auth/auth_login.php';
                break;
            case 'dang-ky':
                include 'auth/auth_register.php';
                break;
            default:
                echo "<script>alert('Hình như có cái gì sai sai ấy!!'); window.location='trang-chu.html';</script>";
                break;
        }
    } else {
        switch ($DuySexy) {
            // Account Handle
            case 'thong-tin':
                include 'pages/account/account_info.php';
                break;

            case 'lich-su':
                include 'pages/account/account_history.php';
                 break;

            case 'nap-tien':
                include 'pages/pages_payment.php';
                break;

            case 'nap-the':
                include 'pages/pages_recharge_card.php';
                break;

            case 'bang-gia':
                include 'pages/pages_price_list.php';
                break;

            case 'vip-like-fast-facebook':
                include 'pages/service/vip_like_fast/index.php';
                break;

            case 'vip-like-avatar-facebook':
                include 'pages/service/vip_like/index.php';
                break;

            case 'vip-like-clone-facebook':
                include 'pages/service/vip_like_clone/index.php';
                break;

            case 'buff-like-facebook':
                include 'pages/service/buff_like/index.php';
                break;
            
            case 'buff-comment-facebook':
                include 'pages/service/buff_comment/index.php';
                break;

            case 'buff-share-facebook':
                include 'pages/service/buff_share/index.php';
                break;

            case 'buff-follows-facebook':
                include 'pages/service/buff_follows/index.php';
                break;

            case 'buff-like-fanpage-facebook':
                include 'pages/service/buff_like_fanpage/index.php';
                break;

    


            // Admin

            case 'cong-tien-thanh-vien':
                include 'admin/admin_member_money.php';
                break;

            case 'chinh-sua-thanh-vien':
                include 'admin/admin_member_edit.php';
                break;

            case 'danh-sach-thanh-vien':
                include 'admin/admin_member_list.php';
                break;

            case 'cai-dat':
                include 'admin/admin_settings.php';
                break;

            case 'them-ngan-hang':
                include 'admin/admin_banks_add.php';
                break;

            case 'danh-sach-ngan-hang':
                include 'admin/admin_banks_list.php';
                break;

            case 'chinh-sua-ngan-hang':
                include 'admin/admin_banks_edit.php';
                break;


            case 'danh-sach-dich-vu':
                include 'admin/service/service_list.php';
                break;

            case 'chinh-sua-dich-vu':
                include 'admin/service/service_edit.php';
                break;

            case 'them-dich-vu':
                include 'admin/service/service_add.php';
                break;

            case 'danh-sach-vip-like-fast-facebook':
                include 'admin/service/vip_like_fast/index.php';
                break;

            case 'danh-sach-vip-like-avatar-facebook':
                include 'admin/service/vip_like/index.php';
                break;

            case 'danh-sach-vip-like-clone-facebook':
                include 'admin/service/vip_like_clone/index.php';
                break;

            case 'danh-sach-buff-like-facebook':
                include 'admin/service/buff_like/index.php';
                break;

            case 'danh-sach-buff-comment-facebook':
                include 'admin/service/buff_comment/index.php';
                break;

            case 'danh-sach-buff-share-facebook':
                include 'admin/service/buff_share/index.php';
                break;

            case 'danh-sach-buff-follows-facebook':
                include 'admin/service/buff_follows/index.php';
                 break;

            case 'danh-sach-buff-like-fanpage-facebook':
                include 'admin/service/buff_like_fanpage/index.php';
                    break;

            default:
                echo "<script>alert('Hình như có cái gì sai sai ấy!!'); window.location='trang-chu.html';</script>";
                break;
        }
    }
} else {
    if ($duysexy == false) {
        include 'auth/auth_login.php';
    } else {
        include 'pages/pages_dashboard.php';
    }
}
?>