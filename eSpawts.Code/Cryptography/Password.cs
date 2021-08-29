using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace eSpawts.Code.Cryptography
{
    class Hash
    {
        public const int SALT_SIZE = 24; // size in bytes
        public const int HASH_SIZE = 24; // size in bytes
        public const int ITERATIONS = 100000; // number of pbkdf2 iterations

        /// <summary>
        /// Hashes the input string using Rfc2898DeriveBytes
        /// Returns a Tuple of the Hashed Password and Salt respectively
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static Tuple<byte[], byte[]> Create(string input)
        {
            // Generate a salt
            RNGCryptoServiceProvider provider = new RNGCryptoServiceProvider();
            byte[] salt = new byte[SALT_SIZE];
            provider.GetBytes(salt);

            // Generate the hash
            Rfc2898DeriveBytes pbkdf2 = new Rfc2898DeriveBytes(input, salt, ITERATIONS);
            return new Tuple<byte[], byte[]>(pbkdf2.GetBytes(HASH_SIZE), salt);
        }
    }
}
