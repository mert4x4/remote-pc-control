using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SetMasterVolume
{
    class Program
    {
        static SystemVolumeConfigurator sound = new SystemVolumeConfigurator();
        static void Main(string[] args)
        {
                sound.SetVolume(Convert.ToInt16(args[0]));
        }
    }
}
