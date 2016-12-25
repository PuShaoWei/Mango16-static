/**
 * 登录
 * @author ShaoWeiPu <pushaowei@sporte.cn>
 * @version $Id$
 * @license sporte.cn
 * @copyright 2016-11-30 10:57:19   体创(上海)云科技有限公司 
 */
SMValidator.setSkin('bootstrap');
(function($view) {
    /* ==================================  Configs  ================================== */
    var options = {
        login: {
/*            account:  $.view("input[name='account']"),
            password: $.view("input[name='password']"),*/
        },
    };
    /* ================================== Triggers ================================== */

    $view
        .on("click" ,     "#submitLogin"       ,   submibtLogin      )


    /* ================================== Functions ================================== */

  var validator  = new SMValidator('form', {
        fields: {
            short: true,
            account: {
                rule: [/^[a-zA-z][a-zA-Z0-9_]{2,9}$/i, '请输入正确的账号'],
                required: '请输入登录账号',
                failCss: 'error',
                failStyle: {color:'#c3f', border:'1px solid #f00'},
                passCss: 'success',
                passStyle: {color: '#090'},
                failHtml: ["*.help-inline"],
            },
            password: {
                rule: [/^[a-zA-z][a-zA-Z0-9_]{2,9}$/i, '请输入正确的密码'],
                required: '请输入密码',
                failCss: 'error',
                failStyle: {color:'#c3f', border:'1px solid #f00'},
                passCss: 'success',
                passStyle: {color: '#090'},
                failHtml: ["*.help-block"],
            },
        },
    });
    function submibtLogin()
    {
     console.log(validator);

    }

})($(document.body));
// 页面中全局定制部分
