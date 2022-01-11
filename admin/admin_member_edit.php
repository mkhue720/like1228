<?php
if($user_level != 4){
    die('<script type="text/javascript">window.location = "/404.php";</script>');
}
$user_id = $_GET['id'];
$result = mysqli_query($conn, "SELECT * FROM table_user WHERE user_id = '$user_id'");
$row = mysqli_fetch_array($result);
?>
<div class="page-content">
    <div class="page-title-box"></div>
    <div class="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">
                                <img src="/views/v1/images/icon/service/facebook/vip_like_clone.png" alt=""
                                    style="height: 27px;margin-right: 5px;">
                                Chỉnh sửa thành viên
                            </h4>
                            <form action="" id="service" method="POST">
                                <div class="form-group">
                                    <label>Tài khoản</label>
                                    <input type="text" id="user_username" class="form-control"
                                        value="<?=$row['user_username'];?>" placeholder="Tài khoản" required=""
                                        autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label>Họ và tên</label>
                                    <input type="text" id="user_fullname" class="form-control"
                                        value="<?=$row['user_fullname'];?>" placeholder="Địa chỉ Email" required=""
                                        autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label>Địa chỉ email</label>
                                    <input type="email" id="user_email" class="form-control"
                                        value="<?=$row['user_email'];?>" placeholder="Địa chỉ Email" required=""
                                        autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="number" id="user_phone" class="form-control"
                                        value="<?=$row['user_phone'];?>" placeholder="Địa chỉ Email" required=""
                                        autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label>ID tài khoản facebook</label>
                                    <input type="number" id="user_facebook" class="form-control"
                                        value="<?=$row['user_facebook'];?>" placeholder="Địa chỉ Email" required=""
                                        autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label>Quyền :</label>
                                    <select id="user_level" class="form-control">
                                        <option value="1"
                                            <?php if (preg_match("/(1)/", "".$row['user_level']."")) {echo "selected";}?>>
                                            Thành viên</option>
                                        <option value="2"
                                            <?php if (preg_match("/(2)/", "".$row['user_level']."")) {echo "selected";}?>>
                                            Công tác viên</option>
                                        <option value="3"
                                            <?php if (preg_match("/(3)/", "".$row['user_level']."")) {echo "selected";}?>>
                                            Đại lý</option>
                                        <option value="4"
                                            <?php if (preg_match("/(4)/", "".$row['user_level']."")) {echo "selected";}?>>
                                            Quản trị viên</option>
                                    </select>
                                </div>
                                <center>
                                    <button type="button" class="btn btn-dark btn-rounded" id="submit"
                                        onclick="edit_member();"><i class="fa fa-plus-circle"></i>
                                        Chỉnh sửa thành viên</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
function edit_member() {
    var user_username = $('#user_username').val();
    var user_fullname = $('#user_fullname').val();
    var user_email = $('#user_email').val();
    var user_phone = $('#user_phone').val();
    var user_facebook = $('#user_facebook').val();
    var user_level = $('#user_level').val();
    if (!user_username) {
        swalalert("Vui lòng nhập tài khoản", "info");
        return;
    }
    if (!user_fullname) {
        swalalert("Vui lòng nhập họ và tên", "info");
        return;
    }
    if (!user_email) {
        swalalert("Vui lòng nhập địa chỉ email", "info");
        return;
    }
    if (!user_phone) {
        swalalert("Vui lòng nhập số điện thoại", "info");
        return;
    }
    if (!user_facebook) {
        swalalert("Vui lòng nhập id facebook", "info");
        return;
    }
    if (!user_level) {
        swalalert("Vui lòng nhập quyền", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'modun_system_ajax.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'edit_member',
            user_username: user_username,
            user_fullname: user_fullname,
            user_email: user_email,
            user_phone: user_phone,
            user_facebook: user_facebook,
            user_level: user_level
        },
        beforeSend: function() {
            wait('#submit', false);
        },
        complete: function() {
            wait('#submit', true, '<i class="fa fa-plus-circle"></i> Chỉnh sửa thành viên');
        },
        success: (data) => {
            if (data.error) {
                swalalert(data.msg, "error");
            } else {
                swalalert(data.msg, "success");
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
        }
    })
}
</script>