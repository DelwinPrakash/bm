(function () {
    var form = document.getElementById('loginForm');
    var idInput = document.getElementById('employeeId');
    var pwInput = document.getElementById('password');
    var idError = document.getElementById('idError');
    var pwError = document.getElementById('pwError');
    var toggle = document.getElementById('toggle');
    var submitBtn = document.getElementById('submitBtn');
    var dialog = document.getElementById('successDialog');
    var dlgId = document.getElementById('dlgId');
    var dlgClose = document.getElementById('dlgClose');

    function setError(input, el, message) {
        if (message) {
            el.textContent = message;
            el.classList.add('is-visible');
            input.setAttribute('aria-invalid', 'true');
        } else {
            el.textContent = '';
            el.classList.remove('is-visible');
            input.removeAttribute('aria-invalid');
        }
    }

    function validate() {
        var id = idInput.value.trim();
        var pw = pwInput.value;
        var ok = true;
        var first = null;

        if (!id) {
            setError(idInput, idError, 'Enter your employee ID.');
            ok = false; first = first || idInput;
        } else if (!/^[A-Za-z0-9\-]{4,20}$/.test(id)) {
            setError(idInput, idError, 'Employee ID must be 4 to 20 letters, numbers or hyphens.');
            ok = false; first = first || idInput;
        } else {
            setError(idInput, idError, '');
        }

        if (!pw) {
            setError(pwInput, pwError, 'Enter your password.');
            ok = false; first = first || pwInput;
        } else if (pw.length < 6) {
            setError(pwInput, pwError, 'Password must be at least 6 characters.');
            ok = false; first = first || pwInput;
        } else {
            setError(pwInput, pwError, '');
        }

        if (first) first.focus();
            return ok;
    }

    idInput.addEventListener('input', function () { if (idInput.getAttribute('aria-invalid')) setError(idInput, idError, ''); });
    pwInput.addEventListener('input', function () { if (pwInput.getAttribute('aria-invalid')) setError(pwInput, pwError, ''); });

    toggle.addEventListener('click', function () {
        var show = pwInput.type === 'password';
        pwInput.type = show ? 'text' : 'password';
        toggle.textContent = show ? 'Hide' : 'Show';
        toggle.setAttribute('aria-pressed', String(show));
    });

    document.getElementById('forgot').addEventListener('click', function (e) { e.preventDefault(); });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (submitBtn.disabled || !validate()) return;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Verifying credentials';

        setTimeout(function () {
            dlgId.textContent = idInput.value.trim().toUpperCase();
            dialog.showModal();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Log in';
        }, 700);
    });

    dialog.addEventListener('close', function () {
        form.reset();
        pwInput.type = 'password';
        toggle.textContent = 'Show';
        toggle.setAttribute('aria-pressed', 'false');
        idInput.focus();
    });

    dlgClose.addEventListener('click', function () { dialog.close();});
})();