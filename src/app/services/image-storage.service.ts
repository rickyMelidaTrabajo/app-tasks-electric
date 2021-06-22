import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  constructor(private storage: AngularFireStorage) { }

  uploadImageBefore(image: any, filePath: string) {
    const fileRef = this.storage.ref(filePath);

    return this.storage.upload(filePath, image);

  }

  uploadImageAfter(image: any, filePath: string) {
    const fileRef = this.storage.ref(filePath);

    return this.storage.upload(filePath, image);
  }

  getImageBefore() {

  }

  getImageAfter() {

  }
}
