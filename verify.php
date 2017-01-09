<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/1/9
 * Time: 11:25
 */
include 'layout_header.php';
?>
<script type="text/javascript" src="./lib/jquery.validate.js"></script>

<form action="" class="x-form" data-parsley-validate>
    <input type="text">
    <input type="text">
    <input type="text">
</form>

<script>
    $.validator.setDefaults({
        submitHandler: function () {
            alert("submitted!");
        }
    });

    $().ready(function () {
        // validate the comment form when it is submitted
        $("#commentForm").validate();

        // validate signup form on keyup and submit
        $("#signupForm").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                topic: {
                    required: "#newsletter:checked",
                    minlength: 2
                },
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Please enter the same password as above"
                },
                email: "Please enter a valid email address",
                agree: "Please accept our policy"
            }
        });

        // propose username by combining first- and lastname
        $("#username").focus(function () {
            var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            if (firstname && lastname && !this.value) {
                this.value = firstname + "." + lastname;
            }
        });

        //code to hide topic selection, disable for demo
        var newsletter = $("#newsletter");
        // newsletter topics are optional, hide at first
        var inital = newsletter.is(":checked");
        var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
        var topicInputs = topics.find("input").attr("disabled", !inital);
        // show when newsletter is checked
        newsletter.click(function () {
            topics[this.checked ? "removeClass" : "addClass"]("gray");
            topicInputs.attr("disabled", !this.checked);
        });
    });
</script>

<form class="cmxform" id="commentForm" method="get" action="" novalidate="novalidate">
    <fieldset>
        <legend>Please provide your name, email address (won't be published) and a comment</legend>
        <p>
            <label for="cname">Name (required, at least 2 characters)</label>
            <input id="cname" name="name" minlength="2" type="text" required="" aria-required="true" class="valid" aria-invalid="false">
        </p>
        <p>
            <label for="cemail">E-Mail (required)</label>
            <input id="cemail" type="email" name="email" required="" aria-required="true" class="valid" aria-invalid="false"><label id="cemail-error" class="error" for="cemail" style="display: none;"></label>
        </p>
        <p>
            <label for="curl">URL (optional)</label>
            <input id="curl" type="url" name="url" class="valid">
        </p>
        <p>
            <label for="ccomment">Your comment (required)</label>
            <textarea id="ccomment" name="comment" required="" aria-required="true" class="valid" aria-invalid="false"></textarea><label id="ccomment-error" class="error" for="ccomment" style="display: none;"></label>
        </p>
        <p>
            <input class="submit" type="submit" value="Submit">
        </p>
    </fieldset>
</form>

<form class="cmxform" id="signupForm" method="get" action="" novalidate="novalidate">
    <fieldset>
        <legend>Validating a complete form</legend>
        <p>
            <label for="firstname">Firstname</label>
            <input id="firstname" name="firstname" type="text" aria-required="true" class="valid" aria-invalid="false">
        </p>
        <p>
            <label for="lastname">Lastname</label>
            <input id="lastname" name="lastname" type="text" aria-required="true" class="valid" aria-invalid="false">
        </p>
        <p>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" aria-required="true" class="valid" aria-invalid="false">
        </p>
        <p>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" aria-required="true" class="valid validate-equalTo-blur" aria-invalid="false"><label id="password-error" class="error" for="password" style="display: none;"></label>
        </p>
        <p>
            <label for="confirm_password">Confirm password</label>
            <input id="confirm_password" name="confirm_password" type="password" aria-required="true" class="error" aria-invalid="true"><label id="confirm_password-error" class="error" for="confirm_password">Pleaseenter the same password as above</label>
        </p>
        <p>
            <label for="email">Email</label>
            <input id="email" name="email" type="email">
        </p>
        <p>
            <label for="agree">Please agree to our policy</label>
            <input type="checkbox" class="checkbox" id="agree" name="agree">
        </p>
        <p>
            <label for="newsletter">I'd like to receive the newsletter</label>
            <input type="checkbox" class="checkbox" id="newsletter" name="newsletter">
        </p>
        <fieldset id="newsletter_topics" class="gray">
            <legend>Topics (select at least two) - note: would be hidden when newsletter isn't selected, but is visible
                here for the demo
            </legend>
            <label for="topic_marketflash">
                <input type="checkbox" id="topic_marketflash" value="marketflash" name="topic" disabled="disabled">Marketflash
            </label>
            <label for="topic_fuzz">
                <input type="checkbox" id="topic_fuzz" value="fuzz" name="topic" disabled="disabled">Latest fuzz
            </label>
            <label for="topic_digester">
                <input type="checkbox" id="topic_digester" value="digester" name="topic" disabled="disabled">Mailing
                list digester
            </label>
            <label for="topic" class="error">Please select at least two topics you'd like to receive.</label>
        </fieldset>
        <p>
            <input class="submit" type="submit" value="Submit">
        </p>
    </fieldset>
</form>


<?php
include 'layout_footer.php';
?>
