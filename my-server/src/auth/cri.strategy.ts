import { PassportStrategy } from '@nestjs/passport';
import { HttpService, Injectable } from '@nestjs/common';
import { Strategy } from 'passport-oauth2';

@Injectable()
export class CriStrategy extends PassportStrategy(Strategy, 'cri')
{
  constructor(private httpService: HttpService) {
    super({
      authorizationURL: 'https://cri.epita.fr',
      tokenURL        : 'https://cri.epita.fr',
      clientID        : '125070',
      clientSecret    : 'f6ff8d394e6185d41834b19210979b897852680cf34700ae4ecb24ea',
      callbackURL     : 'http://localhost:8080/complete/epita/',
      scope           : 'profil',
    });
  }

  async validate(
    accessToken: string,
  ): Promise<any> {
    const { data } = await this.httpService.get('https://cri.epita.fr', {
      headers: { Authorization: `Bearer ${accessToken}`}
    }).toPromise();
  }
}
