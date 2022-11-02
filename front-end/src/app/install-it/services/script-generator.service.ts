import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";

const BASE_URL = environment.backendAPIBaseURL + '/generate-script';

@Injectable({ providedIn: 'root' })
export class ScriptGeneratorService {
  constructor(
    private http: HttpClient
  ) {}

  /**
   * Gernate script to generate
   * @param osName - The name of the operating system
   * @param selectedPackagesNames - The names of the packages to install
   */
  generateScript(osName: string, selectedPackagesNames: string[]): Observable<{ curlInstallCommand: string, installScript: string, }> {
    const queryParams = new HttpParams({
      fromObject: {
        operatingSystem: osName,
        packages: selectedPackagesNames
      }
    });

    const httpHeaders = new HttpHeaders({
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Content-Type': 'text/plain; charset=utf-8'
    });

    const responseType = 'text' // api does not send JSON but raw text as a response

    // generates string like http://install.it/api/generate-script?operatingSystem=linux&packages=NodeJS&packages=Docker
    let installScriptUrl = BASE_URL + '?operatingSystem=' + osName + '&packages=' + selectedPackagesNames.join('&packages=');
    installScriptUrl = encodeURI(installScriptUrl);
    const curlInstallCommand = `bash <(curl -s ${installScriptUrl})`

    return this.http.get(BASE_URL, {
      params: queryParams,
      headers: httpHeaders,
      responseType: responseType
    }).pipe(
      map((response: any) => {
        return {
          curlInstallCommand: curlInstallCommand,
          installScript: response
        }
      })
    );
  }
}
