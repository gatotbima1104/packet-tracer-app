export interface IPackage {
  summary: {
    awb: string;
    courier: string;
    service: string;
    status: string;
    date: string;
    desc: string;
    amount: string;
    weight: string;
  };
  detail: {
    origin: string;
    destination: string;
    shipper: string;
    receiver: string;
  };
  history: {
    date: string;
    desc: string;
    location: string;
  }[];
}
