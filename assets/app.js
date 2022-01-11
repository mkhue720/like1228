function loading() {
    $('body').append('<div class="web-loading">\n' + '<div class="lds-dual-ring"></div>\n' + '</div>\n');
    setTimeout(() => {
        $('.web-loading').remove();
    }, 1000);
}

function swalalert(text, type) {
    return swal("Thông báo", text, type);
}

function toastralert(title, icon) {
    return toastr[icon](title, "Thông báo");
}

function wait(t, e, n) {
    return e ? $(t).prop("disabled", !1).html(n) : $(t).prop("disabled", !0).html(
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Đang xử lý...')
}

function formatNumber(nStr, decSeperate = '.', groupSeperate = ',') {
    nStr += '';
    x = nStr.split(decSeperate);
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
    }
    return x1 + x2;
}

function coppy(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    noti("Sao chép thành công", "success");
}

function random_text(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function tbdbLinhDepTrai(call) {
    var tbdb = {
        stateSave: true,
        destroy: true,
        scrollX: !0,
        language: {
            search: "Tìm Kiếm",
            zeroRecords: "<center>Không tìm thấy kết quả dữ liệu</center>",
            info: "Hiển thị _START_ đến _END_ của _TOTAL_ mục",
            infoEmpty: "Hiển thị 0 đến 0 của 0 mục",
            lengthMenu: "Hiển thị _MENU_ mục",
            infoFiltered: "(Được lọc từ _MAX_ mục)",
            loadingRecords: "Đang tải...",
            paginate: {
                previous: "<i class='fa fa-chevron-left'>",
                next: "<i class='fa fa-chevron-right'>"
            },
            emptyTable: "<center>Không có dữ liệu để hiển thị</center>"
        },
        lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"]
        ]
    };
    $(call).DataTable(tbdb);
}
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "rtl": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": 300,
    "hideDuration": 1000,
    "timeOut": 2000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  