import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'jacob', name: 'Jacob' },
    { id: 'manu', name: 'Manuel' },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          // <li>
          //   <Link href="/clients/jacob">Jacob</Link>
          // </li>
          // <li>
          //   <Link href="/clients/manub">Manuel</Link>
          // </li>
          {
            /* <Link href={`/client/${client.id}`}>{client.name}</Link> */
          }
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: '/clients/[id]',
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
