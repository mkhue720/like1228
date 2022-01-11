<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <h4 class="header-title p7">Lịch sử nạp thẻ</h4>

                <div class="table-responsive">
                    <table class="dataTable table table-bordered table-hover text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã giao dịch</th>
                                <th>Nhà mạng</th>
                                <th>Mệnh giá</th>
                                <th>Serial</th>
                                <th>Pin</th>
                                <th>Thực nhận</th>
                                <th>Nội dung</th>
                                <th>Trạng thái</th>
                                <th>Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                            $result = mysqli_query($conn,"SELECT * FROM table_card WHERE card_username = '$user_username' ORDER BY card_id DESC LIMIT 0,100");
                            while($row = mysqli_fetch_assoc($result)){
                                if ($row['card_status'] == 'progress') {
                                    $card_status = '<a style="color: gray;font-weight: bold">Chờ duyệt</a>';
                                }else if ($row['vip_like_status'] == 'fail') {
                                    $card_status = '<a style="color: red;font-weight: bold">Thất bại</a>';
                                }else if ($row['vip_like_status'] == 'success') {
                                    $card_status = '<a style="color: green;font-weight: bold">Thành công</a>';
                                }
                            ?>
                            <tr>
                                <td><?=$row['card_id'];?></td>
                                <td><?=$row['card_code'];?></td>
                                <td><?=$row['card_type'];?></td>
                                <td><?=number_format($row['card_amount']);?></td>
                                <td><?=$row['card_serial'];?></td>
                                <td><?=$row['card_pin'];?></td>
                                <td><?=number_format($row['card_origin']);?></td>
                                <td><?=$row['card_content'];?></td>
                                <td><?=$card_status;?></td>
                                <td><?php echo date('d-m-Y', $row['card_time']);?></td>

                            </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>