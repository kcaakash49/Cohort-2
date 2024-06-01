import { Client } from 'pg';

// Async function to insert address data into the addresses table
async function insertAddress(user_id: number, city: string, country: string, street: string, pincode: string) {
  const client = new Client({
    connectionString: 'postgresql://aakash:root@localhost/cohort',
  });

  try {
    await client.connect();
    
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)";
    const values = [user_id, city, country, street, pincode];
    const res = await client.query(insertQuery, values);
    
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertAddress(1, 'Butwal', 'Nepal', 'Manigram', '071');
insertAddress(2, 'Kathmandu', 'Nepal', 'Thamel', '44600');

export default insertAddress;
