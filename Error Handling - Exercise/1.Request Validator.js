function solve(obj) {
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let uriRegex = /(^[\w.]+$)/;
  let messageTestRegex = /([<>\\&"'])/;

  if (!obj.method || !validMethods.includes(obj.method)) {
    throw Error("Invalid request header: Invalid Method");
  }

  if (!obj.uri || obj.uri == "" || !uriRegex.test(obj.uri)) {
    throw Error("Invalid request header: Invalid URI");
  }

  if (!obj.version || !validVersions.includes(obj.version)) {
    throw Error("Invalid request header: Invalid Version");
  }

  if (obj.message == undefined || messageTestRegex.test(obj.message)) {
    throw Error("Invalid request header: Invalid Message");
  }

  return obj;
}

// console.log(solve(
//     {
//         method: 'POST',
//         uri: 'home.bash',
//         version: 'HTTP/2.0'
//       }))

console.log(
  solve({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "\r\n",
  })
);

// {/* <script>alert("xss vulnerable")</script>
// \r\n
// &copy;
// "value"
// '; DROP TABLE */}

// console.log(solve({
//     method: 'POST',
//     uri: 'home.bash',
//     version: 'HTTP/2.0'
//   }

//   ))
