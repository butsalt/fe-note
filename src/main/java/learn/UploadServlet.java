package learn;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class UploadServlet extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		
		// Create a factory for disk-based file items
		DiskFileItemFactory factory = new DiskFileItemFactory();

		// Configure a repository (to ensure a secure temp location is used)
		ServletContext servletContext = this.getServletConfig().getServletContext();
		File repository = (File) servletContext.getAttribute("javax.servlet.context.tempdir");
		factory.setRepository(repository);

		// Create a new file upload handler
		ServletFileUpload upload = new ServletFileUpload(factory);

		// Parse the request
		String json = "{";
		json += "\"files\":[";
		try {
			List<FileItem> items = upload.parseRequest(request);
			int size = items.size();
			for (int i = 0; i < size; i++) {
				FileItem item = items.get(i);
				String itemJson =
					"{" +
						"\"field\":" + "\"" +item.getFieldName() + "\"" + "," +
						"\"file\":" + "\"" + item.getName() + "\"" +
					"}";
				json += itemJson;
				if (i < size - 1) {
					json += ",";
				}
			}
		} catch (FileUploadException e) {
			e.printStackTrace();
		}
		json += "]}";
		response.getWriter()
			.append(json)
			.flush();
	}

	
}
