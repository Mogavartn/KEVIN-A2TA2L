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
                                        {data.icon}
                                    </div>
                                    <div className="services__two-single-service-content">
                                        <ul className="sub-menu">
                                            <li><Link href="/services">Services 01</Link></li>
                                            <li><Link href="/services-two">Services 02</Link></li>
                                            <li><Link href="/services/data-analytics">Services Details</Link></li>
                                        </ul>
                                    </div>
                                    <div className="services__two-single-service-content">
                                        <h4>{data.title}</h4>
                                        <Link href={`/services/${data.id}`} className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
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