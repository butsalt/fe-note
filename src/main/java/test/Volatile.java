package test;

import java.util.concurrent.TimeUnit;

public class Volatile {
	//如果变量被volatile修饰
	//	get: 能保证在引用该变量时取回的始终是在主内存中存储的值
	//	set: 能保证该变量的值被修改时即时同步到主内存中
	//1. 不会取回初始化到一半的值
	//2. 保证在引用变量前的操作完整执行，保证在引用变量后的操作没有执行
	//3. 保证引用变量的逻辑不会被编译器优化
	private static boolean stopRequested;

	public static void request() {
		while (!getFlag()) {
		}
	}

	public static void setFlag(boolean flag) {
		stopRequested = flag;
	}

	//如果方法被synchronized修饰
	// 执行方法时会将主内存中该方法所属对象的变量信息完整地取到工作内存中
	// 执行完毕后会将主内存中该方法所属对象的变量信息即时同步回主内存中(但不保证其他线程使用到的对象的变量信息始终来自主内存)
	public static boolean getFlag() {
		return stopRequested;
	}

	public static void stopRequest() {
		setFlag(true);
	}

	public static void main(String[] args) {
		new Thread(new Runnable() {
			public void run() {
				request();
			}
		}).start();
		try {
			TimeUnit.SECONDS.sleep(1);
			stopRequest();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}