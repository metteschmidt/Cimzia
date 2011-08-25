/* Support functions */

function inlineInclude(file)
{
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include any js files here */
// inlineInclude('../viewer/js/json2.js');

function quickView(fileName)
{
        // alert(monitorEvent.category);
        var invokeString = "objc://iplanner/quickView?" + encodeURIComponent(fileName);
        // window.location = invokeString;
        iFrame = document.createElement("IFRAME");
        iFrame.setAttribute("src", invokeString);
        document.body.appendChild(iFrame); 
        iFrame.parentNode.removeChild(iFrame);
        iFrame = null;

}

