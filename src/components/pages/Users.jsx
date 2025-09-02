
import { Link, useLocation } from 'react-router-dom';

function Users({ users }) {
    const location = useLocation();
    return (
        <div className='grid grid-cols-4'>

            {users.map((item) => (
                <Link
                    key={item.id}
                    to={`/users/${item.id}`}
                    state={{ backgroundLocation: location }}
                    className="
            block
            bg-white
            border border-gray-200
            rounded-lg
            shadow-sm
            hover:shadow-md
            transition-shadow duration-200
            overflow-hidden
          "
                >
                    <div className="h-48 bg-gray-50 flex items-center justify-center">
                        {
                            !item.image ? (
                            <span className="text-4xl text-gray-300 uppercase">{item.name[0]}</span>
                            )  :
                            (
                                <img src={item.image} alt="" className=' object-contain h-full' />
                            )
                        }
                    </div>
                    <div className="p-4 text-center">
                        <h2 className="text-base font-semibold text-gray-900">
                            {item.name}
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Gender: {item.gender}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Users