<?php 
if($user_level != 4){
    die('<script type="text/javascript">window.location = "/404.php";</script>');
}
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
                                Cộng, trừ tiền thành viên
                            </h4>
                            <form action="" method="POST">
                                <div class="form-group">
                                    <label>Tài khoản:</label>
                                    <input id="user_username" type="text" class="form-control"
                                        placeholder="Nhập tên tài khoản." autocomplete="off" required="">
                                </div>
                                <div class="form-group">
                                    <label>Số tiền:</label>
                                    <input id="user_point" type="number" class="form-control"
                                        placeholder="Nhập tên tài khoản." autocomplete="off" required="">
                                </div>
                                <div class="form-group">
                                    <label>Chọn chức năng:</label>
                                    <select id="user_type_point" class="form-control">
                                        <option value="-">Trừ</option>
                                        <option value="+" selected>Cộng</option>
                                    </select>
                                </div>

                                <center>
                                    <button type="button" class="btn btn-dark btn-rounded" id="submit"
                                        onclick="edit_point();"><i class="fa fa-plus-circle"></i>
                                        Thực hiện</button>
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
function edit_point() {
    var user_username = $('#user_username').val();
    var user_point = $('#user_point').val();
    var user_type_point = $('#user_type_point').val();
    if (!user_username) {
        swalalert("Vui lòng nhập tài khoản.", "info");
        return;
    }
    if (!user_point) {
        swalalert("Vui lòng nhập số tiền.", "info");
        return;
    }
    if (!user_type_point) {
        swalalert("Vui lòng chọn chức năng.", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'modun_system_ajax.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'edit_point',
            user_username: user_username,
            user_point: user_point,
            user_type_point: user_type_point
        },
        beforeSend: function() {
            wait('#submit', false);
        },
        complete: function() {
            wait('#submit', true, '<i class=\"fa fa-lock\"></i> Thực hiện');
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
