<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <h4 class="header-title p7">Danh Sách VIP Like Clone facebook</h4>

                <div class="table-responsive">
                    <table class="dataTable table table-bordered table-hover text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Họ tên</th>
                                <th>ID</th>
                                <th>Tốc độ</th>
                                <th>Cảm xúc</th>
                                <th>Số lượng</th>
                                <th>Post/day</th>
                                <th>Thời hạn</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                            $result = mysqli_query($conn,"SELECT * FROM table_vip_like WHERE vip_like_username = '$user_username' AND vip_like_service = 'vip-like-fast-facebook' ORDER BY vip_like_id DESC LIMIT 0,15");
                            while($row = mysqli_fetch_assoc($result)){
                                if ($row['vip_like_status'] == 'progress') {
                                    $vip_like_status = '<a style="color: gray;font-weight: bold">Chờ duyệt</a>';
                                }else if ($row['vip_like_status'] == 'running') {
                                    $vip_like_status = '<a style="color: violet;font-weight: bold">Đang chạy</a>';
                                }else if ($row['vip_like_status'] == 'complete') {
                                    $vip_like_status = '<a style="color: green;font-weight: bold">Hoàn thành</a>';
                                }else if ($row['vip_like_status'] == 'blocked') {
                                    $vip_like_status = '<a style="color: red;font-weight: bold">Bị khóa</a>';
                                }
                            ?>
                            <tr>
                                <td><?=$row['vip_like_id'];?></td>
                                <td><a href="http://fb.com/<?=$row['vip_like_facebook'];?>"
                                        target="_blank"><?=$row['vip_like_facebook_name'];?></a></td>
                                <td><?=$row['vip_like_facebook'];?></td>
                                <td><?=$row['vip_like_speed'];?> <?=ucfirst($row['vip_like_reaction']);?></td>
                                <td><?=ucfirst($row['vip_like_reaction']);?></td>
                                <td><?=$row['vip_like_amount'];?></td>
                                <td><?=$row['vip_like_amount_post'];?></td>
                                <td><?=date('d-m-Y', $row['vip_like_expires']);?></td>
                                <td><?=$vip_like_status;?></td>
                                <td><button type="button" onclick="vip_like_extend(<?=$row['vip_like_id'];?>)" class="btn btn-primary btn-sm"><i class="fa fa-shopping-bag" aria-hidden="true"></i> Gia hạn</button>
                                    <button type="button" onclick="vip_like_delete(<?=$row['vip_like_id'];?>)" class="btn btn-danger btn-sm"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</button>
                                </td>
                            </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
function vip_like_extend(id) {
    swal({
        title: 'Xác nhận?',
        text: `Bạn có chắc muốn gia hạn cho id ${id} này`,
        imageUrl: `/views/v1/images/icon/notification_payment.png`,
        imageHeight: '100px',
        input: 'select',
        inputOptions: {
            1: '1 tháng',
            2: '2 tháng',
            3: '3 tháng',
            4: '4 tháng',
            5: '5 tháng',
            6: '6 tháng',
        },
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tôi đồng ý',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result) {
            $.ajax({
                url: WEBSITE_URL + prefix + 'modun_service_ajax.php',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    type: 'vip_like_extend',
                    vip_like_id: id,
                    vip_like_expires: result
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
function vip_like_delete(id) {
    swal({
        title: 'Xác nhận?',
        text: `Bạn có chắc muốn xóa vip like cho id ${id} này`,
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
                url: WEBSITE_URL + prefix + 'modun_service_ajax.php',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    type: 'vip_like_delete',
                    vip_like_id: id
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