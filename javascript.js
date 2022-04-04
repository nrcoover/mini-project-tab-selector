
        // global variable declerations
        var tabs = document.getElementsByClassName('tab');

        
        // function to remove .show-active class & add to clicked
        function setNewActive(el) {
            // select all .content-body
            var contentBodies = document.getElementsByClassName('content-body');
            // remove .show-active
            for (var contentBody of contentBodies) {
                contentBody.classList.remove('show-active');
            }
            // add .show-active (back) to clicked
            document.getElementById(el.textContent.trim()).classList.add('show-active');

            var tabs = document.getElementsByClassName('tab');
            for (var tab of tabs) {
                tab.classList.remove('tab-active');
            }
            el.classList.add('tab-active');
        }

        // DARK MODE TOGGLE FUNCTIONALITY
        var darkModeSwitch = document.querySelector('#Dark-Mode-Switch');
        var darkModetoggleIsOn = false;
        darkModeSwitch.addEventListener('click', function() {
            if (darkModetoggleIsOn === false) {
                darkModeSwitch.classList.add('toggle-is-active');
                return darkModetoggleIsOn = true;
            } else {
                darkModeSwitch.classList.remove('toggle-is-active');
                return darkModetoggleIsOn = false;
            }
        });

        // LANGUAGE TOGGLE FUNCTIONALITY
        var languageSwitch = document.querySelector('#Language-Switch');
        var languagetoggleIsOn = false;
        languageSwitch.addEventListener('click', function() {
            if (languagetoggleIsOn === false) {
                languageSwitch.classList.add('toggle-is-active');
                return languagetoggleIsOn = true;
            } else {
                languageSwitch.classList.remove('toggle-is-active');
                return languagetoggleIsOn = false;
            }
        });

        // select .tab class, and loop through
        for (var tab of tabs) {
            // add click listener to each tab
            tab.addEventListener('click', function(e) {
              setNewActive(e.currentTarget);
              console.log(e.currentTarget);
            });
        }