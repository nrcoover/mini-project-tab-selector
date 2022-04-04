        // function to remove .show-active class & add to clicked
        console.log('hello');
        
        function setNewActive(el) {
            var contentBodies = document.getElementsByClassName('content-body');
            // select all .content-body
            // remove .show-active
            console.log(contentBodies);
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

        // select .tab class, and loop through
        var tabs = document.getElementsByClassName('tab');
        for (var tab of tabs) {

            // add click listener to each tab
            tab.addEventListener('click', function(e) {
              setNewActive(e.currentTarget);
              console.log(e.currentTarget);
            });
        }