<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <h4 class="header-title p7">Lịch sử hoạt động, cập nhật tài khoản</h4>

                <div class="table-responsive">
                    <table class="dataTable table table-bordered table-hover text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Hoạt động</th>
                                <th>Địa chỉ IP</th>
                                <th>Địa chỉ Useragent</th>
                                <th>Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                            $result = mysqli_query($conn,"SELECT * FROM table_history_account WHERE history_account_username = '$user_username' ORDER BY history_account_id DESC LIMIT 0,100");
                            while($row = mysqli_fetch_assoc($result)){
                            ?>
                            <tr>
                                <td><?=$row['history_account_id'];?></td>
                                <td><?=$row['history_account_content'];?></td>
                                <td><?=$row['history_account_ip'];?></td>
                                <td><?php echo useragent($row['history_account_useragent']);?></td>
                                <td><?php echo date('d-m-Y', $row['history_account_time']);?></td>

                            </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>