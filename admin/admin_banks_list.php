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
                                            <th>Ngân hàng</th>
                                            <th>Chủ tài khoản</th>
                                            <th>Số tài khoản</th>
                                            <th>Chi nhánh</th>
                                            <th>Trạng thái</th>
                                            <th>Ngày thêm</th>
                                            <th>Chỉnh sửa</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php 
                                        $result = mysqli_query($conn,"SELECT * FROM table_banks ORDER BY banks_id DESC LIMIT 0,100");
                                        while($row = mysqli_fetch_assoc($result)){
                                            if ($row['banks_status'] == 'true') {
                                                $banks_status = 'Hiện';
                                            }else if ($row['banks_status'] == 'false') {
                                                $banks_status = 'Ẩn';
                                            }
                                        ?>
                                        <tr>
                                            <td><?=$row['banks_id']?></td>
                                            <td><?=$row['banks_name']?></td>
                                            <td><?=$row['banks_account_holder']?></td>
                                            <td><?=$row['banks_number_holder']?></td>
                                            <td><?=$row['banks_branch']?></td>
                                            <td><?=$banks_status?></td>
                                            <td><?=date('d-m-Y', $row['banks_time']);?></td>
                                            <td><a href="/chinh-sua-ngan-hang/<?=$row['banks_id']?>"
                                                    class="btn btn-info btn-sm"><i class="fa fa-edit" aria-hidden="true"></i> Chỉnh sửa</a></td>
                                            <td><button type="button" onclick="delete_banks(<?=$row['banks_id']?>);"
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
function delete_banks(id) {
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
                    type: 'delete_banks',
                    banks_id: id
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
