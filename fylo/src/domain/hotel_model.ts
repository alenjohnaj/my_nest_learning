// models.ts

// Model for a Hotel
class Hotel {
    id: string;
    name: string;
    address: string;
    rooms: Room[];
  
    constructor(id: string, name: string, address: string, rooms: Room[] = []) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.rooms = rooms;
    }
  }
  
  // Model for a Room
  class Room {
    id: string;
    roomNumber: string;
    type: string;
    capacity: number;
    pricePerNight: number;
    isAvailable: boolean;
  
    constructor(id: string, roomNumber: string, type: string, capacity: number, pricePerNight: number) {
      this.id = id;
      this.roomNumber = roomNumber;
      this.type = type;
      this.capacity = capacity;
      this.pricePerNight = pricePerNight;
      this.isAvailable = true;
    }
  }
  
  // Model for a Booking
  class Booking {
    id: string;
    roomId: string;
    userId: string;
    checkInDate: Date;
    checkOutDate: Date;
  
    constructor(id: string, roomId: string, userId: string, checkInDate: Date, checkOutDate: Date) {
      this.id = id;
      this.roomId = roomId;
      this.userId = userId;
      this.checkInDate = checkInDate;
      this.checkOutDate = checkOutDate;
    }
  }
  
  export { Hotel, Room, Booking };
  