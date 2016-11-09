package learn;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SetCookieServlet extends HttpServlet {
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException {
		Cookie cookie = new Cookie("name", "butsalt");
		//持续时间3600秒
		cookie.setMaxAge(36000);
		cookie.setDomain("localhost");
		cookie.setPath("/");
		response.addCookie(cookie);
	}

}
