import Router from "next/router";

const redirectTo = (res: any, destination: string, code: number = 302) => {
  if (res) {
    res.statusCode = code;
    res.setHeader("Location", destination);
    res.end();
    return null;
  } else {
    Router.push(destination);
  }
};

export default redirectTo;
