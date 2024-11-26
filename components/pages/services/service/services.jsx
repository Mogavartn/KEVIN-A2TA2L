import Link from 'next/link';
import servicesData from '@/components/data/services-data';

const ServicesMain = () => {
    return (
        <>
        <div className="services__two section-padding">
                <div className="container">
                    <div className="row gy-4">
                    {servicesData?.map((data, id) => (
                        <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                        <div className="services__two-single-service">
                            <div className="services__two-single-service-icon">
                            {/* Vous pouvez remplacer ceci par une icône ou un autre contenu dynamique */}
                            <i className="fas fa-cogs"></i>
                            </div>
                            <div className="services__two-single-service-content formation-solution">
                            <h4>{data.titre}</h4> {/* Titre de la catégorie */}
                            <ul className="">
                                {data.liste?.map((item, index) => (
                                <li key={index}>
                                    <Link href={`/services/${data.id}/${item.id}`}><i className="far fa-chevron-double-right"></i>
                                    {item.intitule}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                            </div>
                            
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesMain;