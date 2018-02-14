using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;

namespace RemotePcControl
{
    class Program
    {
        [DllImport("user32.dll")]

        public static extern void keybd_event(byte key, byte scancode, uint flags, IntPtr extrainfo);

        public const int KEYEVENTF_EXTENTEDKEY = 1;
        static byte[] modes = new byte[] { 0xAD, 0xAF, 0xAE, 0xB0,0xB3,0xB1,0x24 };

        /*
        public const int VK_MUTE = 0xAD;
        public const int VK_VOLUME_UP = 0xAF;
        public const int VK_VOLUME_DOWN = 0xAE;
        public const int VK_MEDIA_NEXT_TRACK = 0xB0;
        public const int VK_MEDIA_PLAY_PAUSE = 0xB3;
        public const int VK_MEDIA_PREV_TRACK = 0xB1;
        */

        static void Main(string[] args)
        {
            try
            {
                byte a = Convert.ToByte(args[0]);
                keybd_event(modes[a], 0, KEYEVENTF_EXTENTEDKEY, IntPtr.Zero);
            }
            catch { }
        }
    }
}
