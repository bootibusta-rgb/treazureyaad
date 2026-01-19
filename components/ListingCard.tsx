import { Listing } from '@/data/listings';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={listing.image} alt={listing.title} className="card-image" />
        <div className="card-category-badge">{listing.category === 'cars' ? '🚗' : '🏠'}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{listing.title}</h3>
        <div className="card-details">
          <div className="card-price">{listing.price}</div>
          <div className="card-location">📍 {listing.location}</div>
        </div>
        <button className="card-contact-btn">Contact Seller</button>
      </div>
      <style jsx>{`
        .card {
          background: linear-gradient(145deg, var(--gray-dark) 0%, var(--gray-medium) 100%);
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid var(--gray-light);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card:hover {
          transform: translateY(-8px);
          border-color: var(--purple);
          box-shadow: 0 12px 32px rgba(147, 51, 234, 0.4);
        }

        .card-image-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: var(--black);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .card:hover .card-image {
          transform: scale(1.1);
        }

        .card-category-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 1.2rem;
          border: 2px solid var(--yellow);
        }

        .card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
          margin: 0;
          line-height: 1.4;
        }

        .card-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .card-price {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--orange);
          text-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);
        }

        .card-location {
          font-size: 0.95rem;
          color: var(--blue);
          font-weight: 500;
        }

        .card-contact-btn {
          margin-top: auto;
          padding: 0.875rem 1.5rem;
          background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 100%);
          border: none;
          border-radius: 10px;
          color: var(--white);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-contact-btn:hover {
          background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%);
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }

        .card-contact-btn:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}
