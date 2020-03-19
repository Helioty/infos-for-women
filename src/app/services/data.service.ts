import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CommonService } from './common.service';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private common: CommonService,
    private platform: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private fileTransfer: FileTransfer,
    private documentViewer: DocumentViewer
  ) { }

  openLocalPDF() {
    const filePath = this.file.applicationDirectory + 'www/assets';
    if (this.platform.is('android')) {
      const fakeName = Date.now();
      this.file.copyFile(filePath, '2013_cab_saude_sexual_saude_reprodutiva.pdf', this.file.dataDirectory, fakeName + '.pdf').then((result) => {
        this.fileOpener.open(result.nativeURL, 'application/pdf');
      });
    } else {
      const options: DocumentViewerOptions = {
        title: 'info-pdf'
      };
      this.documentViewer.viewDocument(filePath + '/2013_cab_saude_sexual_saude_reprodutiva.pdf', 'application/pdf', options);
    }
  }

  downloadAndOpenFile() {
    // Aqui deveria ter a url de algum site e não de um arquivo local;
    const downloadUrl = 'assets/2013_cab_saude_sexual_saude_reprodutiva.pdf';
    const path = this.file.dataDirectory;
    const transfer = this.fileTransfer.create();
    this.common.showToast('before');
    transfer.download(downloadUrl, path + 'saude_sexual_e_reprodutiva.pdf').then((result) => {
      this.common.showToast('Transferindo...');
      const url = result.toURL();
      if (this.platform.is('ios')) {
        this.documentViewer.viewDocument(url, 'application/pdf', {});
      } else {
        this.fileOpener.open(url, 'application/pdf');
      }
    });
  }

}
