export class Location
{
	public locationId: number;
	public locationDescription: string;
	public addressLine1: string;
	public city: string;
	public stateAbbreviation: string;
	public zip5: string;
	public zip4: string;
	public county: string;
	public rowLoadedDateTime: Date;
	public rowUpdatedDateTime: Date;
	public etlLoadedDateTime: Date;
	public dealershipId: number;
	public localRadius: number;
	public regionalRadius: number;
	public hasPickupService: boolean;
	public hasLocalDeliveryService: boolean;
	public hasRegionalDeliveryService: boolean;
	public hasNationalDeliveryService: boolean;
	public hasInspectionService: boolean;
	public subsidyRadius: number;
	public regionalDeliveryFee: number;
	public assignBayNumber: boolean;
	public parentLocationId: number;
	public locationCode: string;
}
