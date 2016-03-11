package test.space;

import java.io.InputStream;

public class Main {
	public static void output (String name, InputStream input) {
		try {
			// \r 13 输入位置移到行首
			// \n 10 输入位置下移一行
			System.out.println(name + ':');
			String msg = "";
			int i;
			while ((i = input.read()) != -1) {
				msg += i + " ";
			}
			System.out.println(msg);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}

	public static void main (String[] args) {
		Main.output("linux", Main.class.getResourceAsStream("./assets/linux"));
		
		Main.output("osx", Main.class.getResourceAsStream("./assets/osx"));
		
		Main.output("win", Main.class.getResourceAsStream("./assets/win"));
	}
}
