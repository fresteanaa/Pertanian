import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('privacy-policy')
  getPrivacyPolicy() {
    return this.contentService.getPrivacyPolicy();
  }

  @Get('terms-conditions')
  getTermsAndConditions() {
    return this.contentService.getTermsAndConditions();
  }
}
