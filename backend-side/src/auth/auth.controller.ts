import { Body, Controller, HttpCode, Post, HttpStatus, Get } from '@nestjs/common';
import { GetCurrentUser, Public } from 'src/common/decorators';
import { Roles } from 'src/common/decorators/roles.decorator';
import UserInteface from 'src/models/user.model';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    @Public()
    @HttpCode(HttpStatus.CREATED)
    async signup(@Body() body: SignupDto): Promise<{success: boolean}> {
        return this.authService.signup(body)
    }

    @Post('signin')
    @Public()
    @HttpCode(HttpStatus.OK)
    async signin(@Body() body: SigninDto): Promise<{access_token: string}> {
        return this.authService.signin(body)
    }

    @Get('me')
    @Roles(['ADMIN', 'CUSTOMER', 'STAFF'])
    @HttpCode(HttpStatus.OK)
    async authMe(@GetCurrentUser() currentUser: UserInteface) {
        delete currentUser.password
        delete currentUser.hashUpdatePWToken
        console.log(currentUser);
        return currentUser;
    }
}
