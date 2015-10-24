package learn;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DownloadServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		InputStream in = null;
		OutputStream out = null;
		try {
			String fileName = request.getParameter("fileName");
			String filePath = request.getParameter("filePath");
			response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
			in = new FileInputStream("./src/main/webapp/" + filePath + "/" + fileName);
			out = response.getOutputStream();
			byte[] buffer = new byte[1024];
			int i = -1;
			while ((i = in.read(buffer)) != -1) {
				out.write(buffer, 0, i);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (in != null) {
					in.close();
				}
			} catch (Exception e){
				e.printStackTrace();
			}
			try {
				if (out != null) {
					out.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

}
