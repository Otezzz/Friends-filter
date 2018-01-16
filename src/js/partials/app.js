new Promise(function (resolve) {
    document.addEventListener('DOMContentLoaded', function () {
        resolve();
    });
}).then(function () {
    return new Promise(function (resolve, reject) {
        VK.init({
            apiId:6335009
        });

        VK.Auth.login(function(response){
            if (response.session) {
                console.log('Все ок!!!');
                resolve();
            } else {
                reject(new Error('Не удалось авторизоваться!!!'));
            }
        }, 2 | 4);
    });
});


