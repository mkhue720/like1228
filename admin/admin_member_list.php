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
                            <h4 class="header-title"><i class="fa fa-list"></i> Danh sách thành viên</h4> <br>
                            <div class="table-responsive">
                                <table class="dataTable text-center table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Tài khoản</th>
                                            <th>Họ tên</th>
                                            <th>Hộp thư</th>
                                            <th>Số điện thoại</th>
                                            <th>Số tiền</th>
                                            <th>Trạng thái</th>
                                            <th>Quyền</th>
                                            <th>Ngày tạo</th>
                                            <th>Chỉnh sửa</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php 
                                        $result = mysqli_query($conn,"SELECT * FROM table_user ORDER BY user_id DESC LIMIT 0,100");
                                        while($row = mysqli_fetch_assoc($result)){
                                            if ($row['user_blocked'] == '1') {
                                                $user_blocked = '<button type="button" onclick="user_unblocked('.$row['user_id'].')" class="btn btn-warning btn-sm"><i class="fa fa-unlock-alt" aria-hidden="true"></i> Mở khóa</button>';
                                            }else if ($row['user_blocked'] == '0') {
                                                $user_blocked = '<button type="button" onclick="user_blocked('.$row['user_id'].')" class="btn btn-danger btn-sm"><i class="fa fa-lock" aria-hidden="true"></i> Khóa</button>';
                                            }
                                            if ($row['user_level'] == '1') {
                                                $user_level = '<a style="color: gray;font-weight: bold">Thành viên</a>';
                                            }else if ($row['user_level'] == '2') {
                                                $user_level = '<a style="color: red;font-weight: bold">Cộng tác viên</a>';
                                            }else if ($row['user_level'] == '3') {
                                                $user_level = '<a style="color: green;font-weight: bold">Đại lý</a>';
                                            }else if ($row['user_level'] == '4') {
                                                $user_level = '<a style="color: blue;font-weight: bold">Quản trị viên</a>';
                                            }
                                        ?>
                                        <tr>
                                            <td><?=$row['user_id']?></td>
                                            <td><?=$row['user_username']?></td>
                                            <td><?=$row['user_fullname']?></td>
                                            <td><?=$row['user_email']?></td>
                                            <td><?=$row['user_phone']?></td>
                                            <td><?=number_format($row['user_point'])?></td>
                                            <td><?=$user_blocked?></td>
                                            <td><?=$user_level?></td>
                                            <td><?=date('d-m-Y', $row['user_time']);?></td>
                                            <td><a href="/chinh-sua-thanh-vien/<?=$row['user_id']?>"
                                                    class="btn btn-info btn-sm"><i class="fa fa-edit" aria-hidden="true"></i> Chỉnh sửa</a></td>
                                            <td><button type="button" onclick="delete_member(<?=$row['user_id']?>);"
                                                    class="btn btn-danger btn-sm"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</button></td>
                                        </tr>
                                        <?php } ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
function user_blocked(id) {
    swal({
        title: 'Xác nhận?',
        text: `Bạn có chắc muốn khóa thành viên id ${id} này`,
        imageUrl: `/views/v1/images/icon/notification_payment.png`,
        imageHeight: '100px',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tôi đồng ý',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result) {
            $.ajax({
                url: WEBSITE_URL + prefix + 'modun_system_ajax.php',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    type: 'user_blocked',
                    user_id: id
                },
                success: (data) => {
                    if (data.error) {
                        swalalert(data.msg, "error");
                    } else {
                        swalalert(data.msg, "success");
                        setTimeout(function() {
                            location.reload();
                        }, 2000);
                    }
                }
            });
        } else {
            swal("Bạn đã nhấn Cancel", "error");
        }
    });
}
</script>
<script>
function user_unblocked(id) {
    swal({
        title: 'Xác nhận?',
        text: `Bạn có chắc muốn mở khóa thành viên id ${id} này`,
        imageUrl: `/views/v1/images/icon/notification_payment.png`,
        imageHeight: '100px',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tôi đồng ý',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result) {
            $.ajax({
                url: WEBSITE_URL + prefix + 'modun_system_ajax.php',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    type: 'user_unblocked',
                    user_id: id
                },
                success: (data) => {
                    if (data.error) {
                        swalalert(data.msg, "error");
                    } else {
                        swalalert(data.msg, "success");
                        setTimeout(function() {
                            location.reload();
                        }, 2000);
                    }
                }
            });
        } else {
            swal("Bạn đã nhấn Cancel", "error");
        }
    });
}
</script>
<script>
function delete_member(id) {
    swal({
        title: 'Xác nhận?',
        text: `Bạn có chắc muốn xóa thành viên id ${id} này`,
        imageUrl: `/views/v1/images/icon/notification_payment.png`,
        imageHeight: '100px',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tôi đồng ý',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result) {
            $.ajax({
                url: WEBSITE_URL + prefix + 'modun_system_ajax.php',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    type: 'delete_member',
                    user_id: id
                },
                success: (data) => {
                    if (data.error) {
                        swalalert(data.msg, "error");
                    } else {
                        swalalert(data.msg, "success");
                        setTimeout(function() {
                            location.reload();
                        }, 2000);
                    }
                }
            });
        } else {
            swal("Bạn đã nhấn Cancel", "error");
        }
    });
}
</script>
