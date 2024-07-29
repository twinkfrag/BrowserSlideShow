using System;
using System.IO;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace net.twinkfrag.BrowserSlideShow
{
	public class CreateList
	{
		public static void Main(String[] args)
		{
			var images = new List<string>();

			string dir = "./img";
			if(args.Length > 0) dir = args[0];
			if (!dir.EndsWith("/")) dir += "/";

			var dirInfo = new DirectoryInfo(dir);
			if (dirInfo.Exists)
			{
				foreach (var file in dirInfo.GetFiles().Where(x => (x.Extension == ".jpg") || (x.Extension == ".png") || (x.Extension == ".gif")))
				{
					images.Add(dir + file.Name);
				}
			}

			using (var json = new StreamWriter(new FileStream("list.json", FileMode.Create)))
			{
				json.WriteLine("{ img : [");
				foreach (var img in images.Where(x => x != images.Last()))
				{
					json.WriteLine("\"" + img + "\",");
				}
				json.WriteLine("\"" + images.Last() + "\"");
				json.WriteLine("] }");
			}
		}
	}
}

