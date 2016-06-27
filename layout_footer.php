



<footer>
    <p>©2015 小步创想 All Rights Reserved</p>
</footer>


<script>

    $(document).ready(function(){
        //左边菜单栏下拉
        $(".menu p.menu-head").click(function() {
            $(this).next("div.menu-body").slideToggle(300).siblings("div.menu-body").slideUp("slow");
        });


        $('.user-name').mousedown(function(){
            $('.user-more').toggle();
        });
        $('.header-user').mouseleave(function(){
            $('.user-more').hide();
        });
    });
</script>
</body>
</html>
