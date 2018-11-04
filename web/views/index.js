$(function () {
    // 获取所有英雄列表
    function getAllHeroList() {
        $.ajax({
            url: 'http://127.0.0.1:5000/getAllHero',
            type: 'get',
            success: function (result) {
                // console.log(result)
                var html = template('row', result)
                $('#tbody').html(html)
            }
        })
    }
    getAllHeroList()

    $('#add').on('click', function () {
        $('.ui.modal.add').modal('show')

    })

    // 初始化下拉框的样式
    $('.ui.dropdown').dropdown()


    // 添加英雄
    $('#addBtn').on('click', function () {
        $.ajax({
            url: 'http://127.0.0.1:5000/addHero',
            type: 'post',
            data: $('#heroInfo').serialize(),
            dataType: 'json',
            success: function (result) {
                console.log(result);
                if (result.status === 200) {
                    getAllHeroList()
                }
            }
        })

    })

    // 编辑英雄
    // 将英雄信息渲染在表单中
    var id = 0
    $('#tbody').on('click', '.edit', function () {
        $('.ui.modal.update').modal('show')
        id = $(this).data('id')
        // console.log(id)
        $.ajax({
            url: 'http://127.0.0.1:5000/getHeroById/' + id,
            type: 'get',
            success: function (result) {
                // console.log(result)
                // console.log(result.data[0])
                $("[name = 'name']").val(result.data[0].name)
                $("[name = 'gender']").val(result.data[0].gender)
            }
        })
    })

    $('#updateBtn').on('click', function () {
        // console.log(id)
        $.ajax({
            url: 'http://127.0.0.1:5000/updateHeroById/' + id,
            type: 'post',
            data: $('#updateInfo').serialize(),
            success: function (result) {
                if (result.status === 200) {
                    getAllHeroList()
                }
            }
        })
    })



    // 删除英雄
    $('#tbody').on('click', '.delete', function () {
        var id = $(this).data('id')
        // console.log(id)
        $.ajax({
            url: 'http://127.0.0.1:5000/deleteHeroById/' + id,
            type: 'get',
            success: function (result) {
                console.log(result)
                if (result.status == 200) {
                    getAllHeroList()
                }
            }
        })
    })
})