import { IProfessionalExperience } from 'app/shared/model/userapp/professional-experience.model';
import { IAcademicExperience } from 'app/shared/model/userapp/academic-experience.model';
import { ICertification } from 'app/shared/model/userapp/certification.model';
import { ICountry } from 'app/shared/model/userapp/country.model';
import { IAddress } from './address.model';
import { IDegreeLevel } from './degree-level.model';
import { ISeniorityLevel } from './seniority-level.model';
import { ISkill } from '../skillapp/skill.model';

export interface ICandidate {
  id?: string;
  personalStatement?: string;
  phone?: number;
  userId?: string;
  login?: string;
  firstName?: string;
  code?: string;
  lastName?: string;
  email?: string;
  address?: IAddress;
  professionalExperience?: IProfessionalExperience[];
  academicExperience?: IAcademicExperience[];
  certification?: ICertification[];
  experienceDurationId?: number;
  experienceDurationName?: string;

  country?: ICountry;
  degreeId?: IDegreeLevel;
  degreeName?: string;
  seniorityLevelId?: ISeniorityLevel;

  skills?: ISkill[];
}

export class Candidate implements ICandidate {
  constructor(
    public id?: string,
    public firstName?: string,
    public lastName?: string,
    public code?: string,
    public email?: string,
    public login?: string,
    public personalStatement?: string,
    public phone?: number,
    public userId?: string,
    public experienceDurationId?: number,
    public experienceDurationName?: string,
    public address?: IAddress,
    public professionalExperience?: IProfessionalExperience[],
    public academicExperience?: IAcademicExperience[],
    public certification?: ICertification[],
    public country?: ICountry,
    public degreeId?: IDegreeLevel,
    public degreeName?: string,
    public seniorityLevelId?: ISeniorityLevel,
    public skills?: ISkill[]
  ) {}
}
